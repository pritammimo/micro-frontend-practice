import { getStorage } from 'home/api';

export const tokenvalue = () =>{
   return getStorage("testtoken")
}
