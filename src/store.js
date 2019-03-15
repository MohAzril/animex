import createStore from 'unistore';
import axios from 'axios';
import { async } from 'q';
import { stat } from 'fs';
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
    bg:'',
    genre:"comedy",
    type:"anime"
}

export const store = createStore(initialState)

// If actions  is a function, it gets passed store:

export const actions = store => ({
    // Action can just return a state update:
    setField: (state, event) => {
        // console.log({ [event.target.name]: event.target.value });
        return { [event.target.name]: event.target.value };
    },

    setBg: (state, image) => {
        // console.log({ [event.target.name]: event.target.value });
        return { bg: image };
    },

    cariBerita: async state =>{
        await axios
        .get("https://cdn.animenewsnetwork.com/encyclopedia/api.xml?"+ state.type +"=~one").then(function(response){
        var parseString = require('xml2js').parseString;
        var xml = response.data;
        parseString(xml,
            function(err,result){
            console.log("result seetelah parsing",result);
            // console.log("ini hasil xml2json",result.ann.manga[2].info[0].$.src);
            if (result.ann.manga !== undefined){
                store.setState({listNews:result.ann.manga});}
            if (result.ann.anime !== undefined){
                store.setState({listNews:result.ann.anime});}    
        });
        // handle response
        // console.log(response.data);
        // console.log(this.state.listNews);
        })
        .catch(function(error){
        // handle error
        console.log(error);
        });

        // await axios
        // .get("https://cdn.animenewsnetwork.com/encyclopedia/api.xml?anime=~megaman").then(function(response){
        // var parseString = require('xml2js').parseString;
        // var xml = response.data;
        // parseString(xml,
        //     function(err,result){
        //     console.log("result seetelah parsing",result);
        //     // console.log("ini hasil xml2json",result.ann.manga[2].info[0].$.src);
        //     if (result.ann.manga !== undefined){
        //         store.setState({listTopNews:result.ann.manga});}
        //     if (result.ann.anime !== undefined){
        //         store.setState({listTopNews:result.ann.anime});}    
        // });
        // handle response
        // console.log(response.data);
        // console.log(this.state.listNews);
        // })
        // .catch(function(error){
        // // handle error
        // console.log(error);
        // });
        // await axios
        // .get(urlHeadline).then(function(response){
        // store.setState({listTopNews:response.data.articles });
        // // handle response
        // console.log(response.data);
        // console.log(this.state.listTopNews);
        // })
        // .catch(function(error){
        // // handle error
        // console.log(error);
        // });
        // await axios
        // .get("https://www.mangaeden.com/api/list/0/").then(function(response){
        // store.setState({listTopNews:response.manga});
        // // handle response
        // // console.log(response.data);
        // // console.log(this.state.listTopNews);
        // })
        // .catch(function(error){
        // // handle error
        // console.log(error);
        // });
    },

    searchNews: async (state,keyword) => {
        // const data={listNews:state.listNews};
        console.log("search Movie by", keyword);
        if(keyword.length>2){
            try{
                const response = await axios.get(
                    // "https://cdn.animenewsnetwork.com/encyclopedia/reports.xml?id=155&name=naruto&nlist=50"
                    // "https://cdn.animenewsnetwork.com/encyclopedia/api.xml?anime=~naruto&manga=~naruto"
                    "https://cdn.animenewsnetwork.com/encyclopedia/api.xml?"+ state.type +"=~"+keyword                    
                );
                console.log("Iki datane",response.data);
                var parseString = require('xml2js').parseString;
                var xml = response.data;
                parseString(xml,
                    function(err,result){
                    console.log(result);
                    if(result.ann.manga !== undefined){store.setState({listNews:result.ann.manga});};
                    if(result.ann.anime !== undefined){store.setState({listNews:result.ann.anime});}
                    // console.log("ini hasil xml2json",result.ann.manga[2].info[1]);
                });
                return state.listNews
                // store.setState({listNews:result.ann.manga});data
                // var mov = response.data.movies;
                // const result = mov.filter(mov => mov.Category == keyword);
                // console.log("hasil",result);
                // store.setState({listNews:response});
            }
            catch (error){
                console.error(error);
            }
        }
    },

    sortRating: (state) => {
        var stabil = state
        var temp = [];
        var hasil = [];
        for (var i = 0; i < stabil.length-1; i++) {
            // for (var j = 0; j < stabil[i].ratings.length ; j++) {
            //     console.log("rating",i.ratings[j].$.weighted_score);
            if(stabil[i].ratings[0].$.weighted_score !== null && stabil[i].ratings[0].$.weighted_score < stabil[i+1].ratings[0].$.weighted_score){
                console.log("sorting", stabil[i].ratings[0].$.weighted_score)
                temp = stabil[i];
                stabil[i] = stabil[i+1];
                stabil[i+1] = temp;
                state.push({listNews:stabil[i]});
                state.push({listNews:stabil[i+1]})};
            }
    },

    signIn: async state => {
        // const data = {username:state.username,password:state.password};
        await axios
//         .post("https://api-todofancy.herokuapp.com/api/auth")
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
        store.setState ({is_login: false})
    },
});
