
```tsx
// hook/use-create-product.ts

import { useMutation } from "@tanstack/react-query";

export function useCreateProduct() {
    return useMutation({
        mutationFn: async (requestPayload) => {
            try {
                  const res = await AxiosAuth.post(`/products`,requestPayload);
                return res;
            } catch (error) {
                return Promise.reject(error);
            }
        },
    });
}

export function useUpdateProduct() {
    return useMutation({
        mutationFn: async ({data, id}) => {
            try {
                  const res = await AxiosAuth.put(`/products/${id}`,data);
                return res;
            } catch (error) {
                return Promise.reject(error);
            }
        },
    });
}

// 
import { mutationOptions } from "@tanstack/react-query";

export const productMutations = {
    create: mutationOptions({
        mutationFn: async (data) => {
             try {
                  const res = await AxiosAuth.post(`/products`,requestPayload);
                return res;
            } catch (error) {
                return Promise.reject(error);
            }
        },
    }),
    update: mutationOptions({
        mutationFn: async ({ data, id }) => {
            try {
                  const res = await AxiosAuth.put(`/products/${id}`,data);
                return res;
            } catch (error) {
                return Promise.reject(error);
            }
        },
    }),
};



// usage inside component
// product.tsx
import { useQueryClient } from "@tanstack/react-query";
import { useMutation } from "@tanstack/react-query";
import { productMutations } from "@/api/mutation";


export default function ProductPage() {
  const queryClient = useQueryClient();

  const {mutateAsync: createProduct,isPending,} = useMutation(productMutations.create)

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const res = await createProduct(requestPayload);

      toast.success("Product created", {
        description: res.data.message,
      });

      queryClient.invalidateQueries({
        queryKey: ["PRODUCTS"],
      });
    } catch (err: any) {
      const { error, message } = err.response?.data ?? {};

      toast.error(message ?? "Something went wrong", {
        description: error,
      });
    }
  };

  return (
    <section>
      {/* form / UI */}
    </section>
  );
}



```