"use client";

import { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { ProductsAPI } from "../../../services/sohwCardService";
import CardCustom from "../../atoms/card";
import Input from "../../../../../shared/components/atoms/input";
import { Product } from "../../../types/products";
import { toast } from "react-toastify";
import Button from "../../../../../shared/components/atoms/button";

interface FormValues {
  numberOfViews?: number;
}

const ListCard: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [displayedProducts, setDisplayedProducts] = useState<Product[]>([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  useEffect(() => {
    ProductsAPI.getAll()
      .then((res) => {
        setProducts(res.data);
        setDisplayedProducts(res.data);
      })
      .catch(console.error);
  }, []);

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    const number = data.numberOfViews;
    setDisplayedProducts(products.slice(0, number));
    toast.success(`${number} items were displayed`, {
      toastId: "success",
      position: "top-right",
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="grid grid-cols-12 gap-4 p-4">
        <div className="col-span-12">
          <Input
            type="number"
            label="Number of item views"
            {...register("numberOfViews", {
              valueAsNumber: true,
              min: { value: 1, message: "Minimum value is 1" },
              max: { value: 20, message: "Maximum value is 20" },
              validate: (value) => value === undefined || !isNaN(value) || "Must be a valid number",
            })}
          />
          {errors.numberOfViews && <p className="text-red-500 text-xs mt-1">{errors.numberOfViews.message}</p>}

          <Button color="blue" type="submit" className="my-2">
            Submit
          </Button>
        </div>

        {displayedProducts.length ? (
          displayedProducts.map((item, index) => (
            <div className="col-span-3" key={`product${index}`}>
              <CardCustom
                title={item.title}
                description={item.description}
                cardClass="h-40 overflow-x-hidden"
                titleClass="text-sm"
                descriptionClass="text-xs font-normal"
              />
            </div>
          ))
        ) : (
          <div className="col-span-12">
            <p>NO Items</p>
          </div>
        )}
      </div>
    </form>
  );
};

export default ListCard;
