```tsx
// catStore

type TCatStoreState = {
    cats: {
        bigCats: number;
        smallCats: number;
    };
    increaseBigCats: () => void;
    increaseSmallCats: () => void;
    summary: ()=> void
}

export const useCatStore = create<TCatStoreState>()(
    set => ({
        cats: {
            bigCats: 0,
            smallCats: 0
        },
        increaseBigCats: ()=> {
            set(
                (state)=> ({
                    cats: {
                        ...state.cats,
                        bigCats: state.cats.bigCats + 1
                    }
                })
            )
        }
    })
)

// usage
const bigCats = useCatStore(state=> state.cats.bigCats)
const increaseBigCats = useCatStore(state => state.increaseBigCats)

```

```tsx
import { immer } from "zustand/middleware/immer";

export const useCatStore = create<TCatStoreState>()(
    immer((set, get) => ({
        cats: {
            bigCats: 0,
            smallCats: 0
        },
        increaseBigCats: ()=> 
            set((state) => {
                state.cats.bigCats++
        }),
        summary: () => {
            const total = get().cats.bigCats + get().cats.smallCats;
            return `there are ${total} cats in total`
        }
    }))
)
// usage

const summary = useCatStore(state=> state.summary)
```