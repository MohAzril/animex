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
    search:""
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
        .get("https://www.mangaeden.com/api/list/0/").then(function(response){
        store.setState({listNews:response.manga});
        // handle response
        // console.log(response.data);
        // console.log(this.state.listNews);
        })
        .catch(function(error){
        // handle error
        console.log(error);
        });
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
        console.log("search Movie by", keyword);
        if(keyword.length>2){
            try{
                const response = await axios.get(
                    "https://www.mangaeden.com/api/list/0/"
                );
                // console.log("Iki datane",response.data);
                // var parseString = require('xml2js').parseString;
                // var xml = response.data;
                // parseString(xml,function(err,result){console.log("ini hasil xml2json",result);});
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
