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

    signIn: async state => {
        // const data = {username:state.username,password:state.password};
        await axios
        // .post("https://mocktofu4.free.beeceptor.com/auth")
        .post("https://api-todofancy.herokuapp.com/api/auth")
        .then(response => {
            console.log("respon login",response.data);
            // if (response.data.hasOwnProperty("status")) {
                store.setState({
                    is_login: true,
                    // api_key: response.data.status,
                    full_name:response.data.user_data.username,
                    email:response.data.user_data.email,
                    avatar:response.data.user_data.avatar
                });
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
