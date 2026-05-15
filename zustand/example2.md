```tsx

```

```tsx
import {shallow} from "zustand/shallow"
const increaseBigCats = useCatStire.use.increaseBigCats()
const {smallCats} = useCatStore()

const {increaseSmallCats, increaseBigCats} = useCatStore(state=> ({
    increaseBigCats: state.increaseBigCats,
    increaseSmallCats: state.increaseSmallCats
}), shallow)

const [increaseSmallCats, increaseBigCats] = useCatStore(state=> ([state.increaseBigCats,
state.increaseSmallCats]), shallow)
```

```tsx
export const useBearStore = create<>()(
    persist((set)=> ({
        bear: 0,
        color: "red",
        size: "big"
        increasePopulation: ()=> 
            set((state)=>({
                bears: state.bears + 1
        })),
        removeAllBears: ()=> set({ bears: state.bears + 1})
    }),
    {
        name: "bear store",
        partialize: (state) => ({ bears: state.bears})
    }
    )
)
```
# Subscribe
```tsx
const [bgColor, setBgColor] = useState("")
useEffect(()=> {
    const unsub = useFoodStore.subscribe((state, prevState)=>{
        if(prevState.fish <=5 && state.fisg > 5){
            setBgColor("red")
        } else if(prevState.fish > 5 && state.fish <=5){
            setBgColor("blue")
        }
    });
    return unsub
},[ ])
```