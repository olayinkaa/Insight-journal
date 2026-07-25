```vue
<template>
    <header>Mobile Development</header>
    <Header/>
</template>
<script>
import Header from ".components/header.vue"
export default {
    components: {
        Header,
    },
}
</script>
```
# Option API
```vue
<template>
    <h3>History</h3>
    <ul>
        <li 
        v-for="transaction in transactions" 
        v-bind:key="transaction.id"
        :class="transaction.amount < 0 ? 'minius': 'plus'"
        >
            {{transaction.}}
        </li>
    </ul>
    <p>{{fullname}}</p>
</template>
<script>
import Header from ".components/header.vue"
export default {
    components: {
        Header,
    },
    data(){
        return {
            transactions: [
                {id: 1, text:"Flower", amount: 10.34},
                {id: 2, text:"Salary", amount: 34.10},
            ],
            firstName: "",
            lastName: "",
            counter: 0,
            fullName: ""
        }
    },
    computed: {
        fullname(){
            return this.firstName + " " + this.lastName
        }
    },
    watch: {
        firstName(newValue, oldValue){
            this.fullName = newValue
        },
        counter(value){
            if(value > 0){
                this.counter = 0;
            }
        }

    }
}
</script>
```

# SETUP
```vue
<template>
    <h3>History</h3>
    <ul>
        <li 
        v-for="transaction in transactions" 
        v-bind:key="transaction.id"
        :class="transaction.amount < 0 ? 'minius': 'plus'"
        >
            {{transaction.}}
        </li>
    </ul>
</template>
<script>
import Header from ".components/header.vue"
export default {
   setup(){
    const transactions = [
        {id: 1, text:"Flower", amount: 10.34},
        {id: 2, text:"Salary", amount: 34.10},
    ]

    add(){

    }

    return {
        transactions,
        add
    }
   }
}
</script>
```
```vue
<template>
    <h3>History</h3>
    <ul>
        <li 
        v-for="transaction in transactions" 
        v-bind:key="transaction.id"
        :class="transaction.amount < 0 ? 'minius': 'plus'"
        >
            {{transaction.}}
        </li>
    </ul>
    <TransactionList :transactions="transactions" />
</template>
<script setup>
import TransactionList from "./components/TransactionList"
import {ref, computed} from "vue"
// reactive
const transactions = ref([
    {id: 1, text:"Flower", amount: 10.34},
    {id: 2, text:"Salary", amount: 34.10},
])
const transactions = [
    {id: 1, text:"Flower", amount: 10.34},
    {id: 2, text:"Salary", amount: 34.10},
]
const total = computed(()=> {
    return transactions.value.reduce((acc, item)=> acc + item.amount, 0)
})
</script>
```
```vue
<template> </template>
<script setup>
import {definePros} from "vue"
const props = defineProps({
    transactions: {
        type: Array, // Number
        required: true
    }
})
</script>
```

# EMIT EVENT
<!-- AddTransaction Component -->
```vue
<script setup>

const emit = defineEmits(['transactionSubmitted']);
const onSubmit = ()=> {
    const transactionData = {
        text: text.value,
        amount: amount.value
    }
    emit("transactionSubmitted", transactionData)
}
</script>
```
```vue
<template>
<AddTransaction @transactionSubmitted="handleTransaction"/>
</template>
<script>
const handleTransaction = (data)=> {
    console.log(data)
}
</script>
```