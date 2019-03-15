import createStore from 'unistore';
import axios from 'axios';
import { async } from 'q';
// import {Provider, connect} from 'unistore/preact';

const initialState ={
    api_key:"",
    is_login:false,
    full_name:"",
    email:"",
    avatar:"",
    username:"",
    password:"",
    listNews:[],    
    listTopNews:[],
    search:"",
    surname: '',
    gender:'',
    region:"",
    age: '',
    weather:'',
    bg:''
}

const apiKey = "72aadd1aff8c490ea5c90d2e5225a042";
const baseUrl = "https://newsapi.org/v2/"
const urlHeadline = baseUrl + "top-headlines?" + "country=id&" + "pageSize=3&"+ "apiKey=" + apiKey;
const urlNews = baseUrl + "everything?" +"q=meme&" + "pageSize=3&"+ "apiKey=" + apiKey;

export const store = createStore(initialState)

// If actions  is a function, it gets passed store:

export const actions = store => ({
    // Action can just return a state update:
    setField: (state, event) => {
        console.log({ [event.target.name]: event.target.value });
        return { [event.target.name]: event.target.value };
    },

    setBg: (state, image) => {
        // console.log({ [event.target.name]: event.target.value });
        return { bg: image };
    },

    cariBerita: async state =>{
        await axios
        .get(urlNews).then(function(response){
        store.setState({listNews:response.data.articles });
        // handle response
        console.log(response.data);
        console.log(this.state.listNews);
        })
        .catch(function(error){
        // handle error
        console.log(error);
        });
        await axios
        .get(urlHeadline).then(function(response){
        store.setState({listTopNews:response.data.articles });
        // handle response
        console.log(response.data);
        console.log(this.state.listTopNews);
        })
        .catch(function(error){
        // handle error
        console.log(error);
        });
    },

    searchNews: async (state,keyword) => {
        console.log("search Movie by", keyword);
        if(keyword.length>2){
            try{
                const response = await axios.get(
                    // "https://cdn.animenewsnetwork.com/encyclopedia/api.xml?manga=~naruto"
                    "https://cdn.animenewsnetwork.com/encyclopedia/reports.xml?id=155"
                    );
                // console.log("Iki datane",response.data);
                var parseString = require('xml2js').parseString;
                var xml = response.data;
                parseString(xml,function(err,result){console.log("ini HASIL xml2json: ",result.report.item[0].type);});
                // var mov = response.data.movies;
                // const result = mov.filter(mov => mov.Category == keyword);
                // console.log("hasil",result);
                store.setState({listNews:response});
            }
            catch (error){
                console.error(error);
            }
        }
    },

    signIn: async state => {
        // const data = {username:state.username,password:state.password};
        await axios
        // .post("https://mocktofu1.free.beeceptor.com/login")
        .post("https://uinames.com/api/?ext")
        .then(response => {
            console.log("respon login",response.data);
            if (response.data.hasOwnProperty("name")) {
                store.setState({
                    is_login: true,
                    api_key: response.data.name,
                    full_name:response.data.name,
                    surname:response.data.surname,
                    region:response.data.region,
                    age:response.data.age,
                    avatar:response.data.photo,
                    gender:response.data.gender
                });
            }
        })
        .catch(error => {
            console.log(error);
        })
    },

    getWeather: async state => {
        // const data = {username:state.username,password:state.password};
        const urlWeather = "https://api.openweathermap.org/data/2.5/weather?appid=baa0ee6c5c2b1f791f536f2f8dbbd7d5&q="
        await axios
        // .post("https://mocktofu1.free.beeceptor.com/login")
        .post(urlWeather + state.region)
        .then(response => {
            console.log("respon weather",response.data.weather[0].id);
            store.setState({weather:response.data.weather[0].id})
            
            // if (response.data.hasOwnProperty("name")) {
            //     store.setState({
            //         is_login: true,
            //         api_key: response.data.name,
            //         full_name:response.data.name,
            //         surname:response.data.surname,
            //         region:response.data.region,
            //         age:response.data.age,
            //         avatar:response.data.photo,
            //         gender:response.data.gender
            //     });
            // }
        })
        .catch(error => {
            console.log(error);
        })
    },

    signOut: state =>{
        return {is_login: false}
    },
});
