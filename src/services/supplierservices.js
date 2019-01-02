import {orderBy} from "lodash";
import {_api_key,language,category,articles_url,api} from "../config/config";


export async function getArticles() {
    try {
        // let articales = await fetch(`${articles_url}?category=${category}&language=${language}`,{
        //   headers:{
        //       'X-API-KEY':_api_key
        //   }      
        // });
        let articales = await fetch(`${api}`,{
            headers:{
                'X-API-KEY':_api_key
            }      
          });
    let result =  await articales.json();
    articales =null;
    return orderBy (result.data,'strTaskListName','desc')
    } catch (error) {
        console.log(error);
        throw error;
    }
    
}