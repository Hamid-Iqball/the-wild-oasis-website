function Button({filter,handleFilter, activeFilter,children}){
    return(

        <button className={`px-5 py-2 hover:bg-primary-700 text-center ${filter===activeFilter?"bg-primary-700 text-primary-50":""}`} onClick={()=>handleFilter(filter)}>{children}</button>
    )
    }

    export default Button