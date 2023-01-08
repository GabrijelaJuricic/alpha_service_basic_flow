import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { selectedServicesState } from "../atoms";

const useCalculatePrices = () => {
  const [fullPrice, setFullPrice] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const selectedServices = useRecoilValue(selectedServicesState);

  useEffect(() => {
    var sum = 0;
    selectedServices.forEach((service) => {
      sum += service.price;
    });
    setFullPrice(sum);
  }, [selectedServices]);

  return [fullPrice, discount, totalPrice];
};

export default useCalculatePrices;
