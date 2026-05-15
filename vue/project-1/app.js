const app = Vue.createApp({
    data(){
        return {
            courseGoal: "DevOps and Jenkins",
            link: "https://goal.com",
            courseTutor: "<h2>Ibrahim Olayinka</h2>",
            counter: 0,
            name: ""
        }
    },
    method: {
        outputGoal(){
            const randNum = Math.random()
            if(randNum > 10){
                return this.courseGoal;
            }
            return randNum
        },
        courseTutor(){
            return this.courseTutor
        },
        setName(e){
            this.name = e.target.value
        },
        setSurname(e,surname){
            this.name = e.target.value + "" + surname
        }
    }
});
app.mount('#user-goal')