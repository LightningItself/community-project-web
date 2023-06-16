import { useCallback, useState,useEffect } from "react";

type AsyncState<T>={
    loading:boolean;
    error?:any;
    value?:T;
    execute: (...params: any[]) => Promise<T>;
}

type AsyncFn<T>= (...params: any[]) => Promise<T>;

//useAsync initiate the request as soon as the component is mounted
export const useAsync = <T>(func: AsyncFn<T>,dependencies=[])=>{
    const {loading,error,value,execute}=useAsyncInternal(func,dependencies);
    useEffect(()=>{
        execute();
    },[execute]);
    return {loading,error,value};
}

//useAsyncFn will initiate the request only when we call the execute function
export const useAsyncFn = <T>(func: AsyncFn<T>,dependencies=[])=>{
    return useAsyncInternal(func,dependencies,false);
}


//This hook will help us to have a structure where for every server request we can get
// 3 states loading,error and value
export const useAsyncInternal =<T>(func: AsyncFn<T>,
    dependencies: Array<any>,
    initialLoading=false):AsyncState<T>=>{

    const [value,setValue]=useState<T>();
    const [loading,setLoading]=useState<boolean>(initialLoading);
    const [error,setError]=useState<any>();


    const execute = useCallback(
        (...params: any[])=>{
            setLoading(true);
            return func(...params).then(data=>
                {
                    setValue(data);
                    setError(undefined);
                    return data;
                }
                ).catch(err=>{
                    setError(err);
                    setValue(undefined);
                    return Promise.reject(err);
                }).finally(()=>setLoading(false));
            }
        ,dependencies);

        return {loading,error,value,execute};

}