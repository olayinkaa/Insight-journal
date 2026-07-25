# mutation
```js
const {isCreating, createCabin} = useCreateCabin();

createCabin({...data, image:image},{
    onSuccess: (data) => {
        toast.success(data.message)
    }
})
```