import React, { useEffect } from "react";
import service_pricing_list from "../../../constants/service_pricing_list.csv";
import Papa from "papaparse";
import alphaLogo from "../../../assets/alphaLogo.png";
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
  serviceAndPriceForSelectedModelState,
} from "../../../atoms";
import { TextField, MenuItem, Select } from "@mui/material";
import { FormControl, InputLabel } from "@mui/material";
import "./ProductCard.css";

const ProductCard = () => {
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
  const [serviceAndPrice, setServiceAndPrice] = useRecoilState(
    serviceAndPriceForSelectedModelState
  );

  // useEffect for fetching data
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

  // useEffect for setting brands
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

  // useEffect for setting models
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

  // useEffect for setting supported year and services with prices for selected model
  useEffect(() => {
    var serviceAndPriceResult = [];
    if (selectedModel) {
      csvContent.slice(1).map((row) => {
        if (row[1] === selectedModel) {
          setLastSupportedYear(row[2]);
          serviceAndPriceResult.push(
            {
              name: "Chain change",
              price: parseFloat(row[3]),
              id: 0,
            },
            {
              name: "Oil and oil filter change",
              price: parseFloat(row[4]),
              id: 1,
            },
            { name: "Air filter change", price: parseFloat(row[5]), id: 2 },
            { name: "Brake fluid change", price: parseFloat(row[6]), id: 3 }
          );
          setServiceAndPrice(serviceAndPriceResult);
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
    <div className="product-card-container">
      <div className="alpha-logo">
        <img src={alphaLogo} />
        <h1>alpha</h1>
      </div>
      <h2>New Order</h2>
      <div className="brand-container">
        <FormControl className="dropdown">
          <InputLabel id="select-brand">Brand</InputLabel>
          <Select
            labelId="select-brand-label"
            id="brand"
            label="Brand"
            value={selectedBrand}
            onChange={handleBrandChange}
          >
            {uniqueBrands.map((brand) => {
              return (
                <MenuItem value={brand} key={brand}>
                  {brand}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </div>

      <div className="model-container">
        <FormControl sx={{ mt: 3 }} className="dropdown">
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
      </div>
      <div className="model-year-container">
        <TextField
          className="dropdown"
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
      </div>
      <div className="mileage-container">
        <TextField
          className="dropdown"
          id="mileage"
          label="Mileage"
          value={enteredMileage}
          onChange={(event) => setEnteredMileage(event.target.value)}
          error={enteredMileage < 0}
          helperText={enteredMileage < 0 ? `Invalid input` : " "}
        ></TextField>
      </div>
    </div>
  );
};

export default ProductCard;
