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

const NewOrder = () => {
  const [csvContent, setCsvContent] = useRecoilState(csvContentState);
  const [uniqueBrands, setUniqueBrands] = useRecoilState(uniqueBrandsState);
  const [availableModels, setAvailableModels] =
    useRecoilState(availableModelsState);
  const [selectedBrand, setSelectedBrand] = useRecoilState(selectedBrandState);
  const [selectedModel, setSelectedModel] = useRecoilState(selectedModelState);

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
    <div>
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
          <FormControl>
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
          <TextField id="model-year" label="Model year"></TextField>
          <TextField id="milleage" label="Milleage"></TextField>
        </div>
      </div>
    </div>
  );
};

export default NewOrder;
