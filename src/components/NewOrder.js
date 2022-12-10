import React, { useEffect } from "react";
import service_pricing_list from "../service_pricing_list.csv";
import Papa from "papaparse";
import { useRecoilState } from "recoil";
import {
  csvContentState,
  uniqueBrandsState,
  selectedBrandState,
  availableModelsState,
  selectedModelState,
  lastSupportedYearState,
  enteredYearState,
  enteredMileageState,
} from "../atoms";
// import { useNavigate } from "react-router-dom";
import {
  TextField,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
} from "@mui/material";
import alphaLogo from "../assets/alphaLogo.png";
import "./NewOrder.css";

const NewOrder = () => {
  const [csvContent, setCsvContent] = useRecoilState(csvContentState);
  const [uniqueBrands, setUniqueBrands] = useRecoilState(uniqueBrandsState);
  const [availableModels, setAvailableModels] =
    useRecoilState(availableModelsState);
  const [selectedBrand, setSelectedBrand] = useRecoilState(selectedBrandState);
  const [selectedModel, setSelectedModel] = useRecoilState(selectedModelState);
  const [lastSupportedYear, setLastSupportedYear] = useRecoilState(
    lastSupportedYearState
  );
  const [enteredYear, setEnteredYear] = useRecoilState(enteredYearState);
  const [enteredMileage, setEnteredMileage] =
    useRecoilState(enteredMileageState);

  // const navigate = useNavigate();

  //  --- useEffect --- //
  useEffect(() => {
    fetch(service_pricing_list)
      .then((response) => response.text())
      .then((responseText) => {
        Papa.parse(responseText, {
          complete: (parsedData) => {
            setCsvContent(parsedData.data);
          },
        });
      });
  }, []);

  useEffect(() => {
    var result = [];
    if (csvContent.length > 1) {
      csvContent.slice(1).filter((row) => {
        return result.push(row[0]);
      });
      setUniqueBrands(uniqueElementsFromArray(result));
      setSelectedBrand(result[0]);
    }
  }, [csvContent]);

  useEffect(() => {
    var result = [];
    if (selectedBrand) {
      csvContent.slice(1).map((row) => {
        if (row[0] === selectedBrand) {
          result.push(row[1]);
        }
      });
      setAvailableModels(result);
      setSelectedModel(result[0]);
    }
  }, [selectedBrand]);

  useEffect(() => {
    if (selectedModel) {
      csvContent.slice(1).map((row) => {
        if (row[0] === selectedBrand && row[1] === selectedModel) {
          setLastSupportedYear(row[2]);
          // todo
          // setati state servicePricesForSelectedModel(3,4,5,6)
        }
      });
    }
  }, [selectedModel]);

  // --- Helper function --- //
  const handleBrandChange = (event) => {
    setSelectedBrand(event.target.value);
  };
  const handleModelChange = (event) => {
    setSelectedModel(event.target.value);
  };
  const uniqueElementsFromArray = (elements) => {
    return elements.reduce(function (a, b) {
      if (a.indexOf(b) < 0) a.push(b);
      return a;
    }, []);
  };

  return (
    <div className="new-order-container">
      <div className="left-side">
        <div className="alpha-logo">
          <img src={alphaLogo} />
          <h1>alpha</h1>
        </div>
        <h2>New Order</h2>
        <FormControl>
          <InputLabel id="select-brand">Brand</InputLabel>
          <Select
            labelId="select-brand-label"
            id="brand"
            label="Brand"
            value={selectedBrand}
            onChange={handleBrandChange}
          >
            {uniqueBrands.map((brand) => {
              // redo key
              return (
                <MenuItem value={brand} key={brand}>
                  {brand}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
        <FormControl sx={{ mt: 3 }}>
          <InputLabel id="select-model">Model</InputLabel>
          <Select
            labelId="select-model-label"
            id="model"
            value={selectedModel}
            label="Model"
            onChange={handleModelChange}
          >
            {availableModels.map((model) => (
              <MenuItem value={model} key={model}>
                {model}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <TextField
          sx={{ mt: 3 }}
          id="model-year"
          label="Model year"
          value={enteredYear}
          onChange={(event) => {
            setEnteredYear(event.target.value);
          }}
          error={enteredYear > lastSupportedYear}
          helperText={
            enteredYear > lastSupportedYear
              ? `The last supported year for selected model is ${lastSupportedYear}`
              : " "
          }
        ></TextField>
        <TextField
          id="mileage"
          label="Mileage"
          value={enteredMileage}
          onChange={(event) => setEnteredMileage(event.target.value)}
          error={enteredMileage < 0}
          helperText={enteredMileage < 0 ? `Invalid input` : " "}
        ></TextField>
      </div>
      <div className="middle"></div>
      <div className="right-side"></div>
    </div>
  );
};

export default NewOrder;
