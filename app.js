const App ={
    data(){
        return{
            title: 'Список заметок',
            placeholder: 'введите название заметок',
            inputValue: '',
            notes: [],
            archive: [],
        }
    },
    mounted() {
        if (localStorage.getItem('notes')){
            try{
                this.notes = JSON.parse(localStorage.getItem('notes'))
                this.archive = JSON.parse(localStorage.getItem('notes'))
            } catch (e) {
                localStorage.removeItem('notes')
            }
        }
    },
    methods:{
        // inputChangeHandler(event){
        //     this.inputValue = event.target.value
        // },
        addNewNote(){
            if (this.inputValue !== ''){
                this.notes.push(this.inputValue)
                this.inputValue = ''
                this.saveNotes();
            }
        },
        // inputKeyPress(event){
        //     if (event.key === 'Enter'){
        //         this.addNewNote()
        //     }
        // }
        deleteNote(idx){
            this.notes.splice(idx,1)
            this.saveNotes();
        },
        saveNotes(){
            const parsed = JSON.stringify(this.notes)
            localStorage.setItem('notes', parsed)
        },
        archiveNote(idx){
            this.archive.push(this.notes[idx])
            this.saveNotes();
        },
        archiveDel(idx){
            this.archive.splice(idx, 1)
            this.saveNotes();
        },
    },
    computed:{
        doubleCount(){
            return this.notes.length * 2
        }
    },
    watch:{
        inputValue(value){
            console.log('value change ', value)
        }
    }
}


const  app = Vue.createApp(App)
app.mount('#root')