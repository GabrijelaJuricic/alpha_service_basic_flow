import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { selectedServicesState } from "../atoms";

const useCalculatePrices = () => {
  const [fullPrice, setFullPrice] = useState(0);
  const [discount, setDiscount] = useState(0);

  const selectedServices = useRecoilValue(selectedServicesState);

  useEffect(() => {
    //fullPrice calculation
    var sum = 0;
    selectedServices.forEach((service) => {
      sum += service.price;
    });
    setFullPrice(sum);

    //discount calculation
    function selectedServiceById(serviceId) {
      var result = false;
      selectedServices.forEach((service) => {
        if (service.id === serviceId) {
          result = true;
          return;
        }
      });
      return result;
    }

    if (
      selectedServiceById(0) &&
      selectedServiceById(1) &&
      selectedServiceById(2) &&
      selectedServiceById(3)
    ) {
      setDiscount(40);
    } else if (
      selectedServiceById(0) &&
      selectedServiceById(1) &&
      selectedServiceById(2)
    ) {
      setDiscount((sum * 0.2).toFixed(2));
    } else if (selectedServiceById(1) && selectedServiceById(2)) {
      setDiscount(20);
    } else if (selectedServiceById(0) && selectedServiceById(3)) {
      setDiscount((sum * 0.15).toFixed(2));
    } else setDiscount(0);
  }, [selectedServices]);

  return [fullPrice, discount];
};

export default useCalculatePrices;
