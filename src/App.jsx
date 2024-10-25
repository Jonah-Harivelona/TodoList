import { useEffect, useId, useRef, useState } from "react"
import { Checkbox } from "./Composants/LesInputs/Checkbox"
import { Input } from "./Composants/LesInputs/Input"
import { ProductCategoryRow } from "./Composants/LesInputs/ProductCategoryRow"
import { ProductRow } from "./Composants/LesInputs/ProductRow"

function App() {
   
    const PRODUCTS = [
         {category : "Fruits", price : "1" , stocked : true, name:"apple"},
         {category : "Fruits", price : "9", stocked : true, name:"banana"},
         {category : "Fruits", price :"3", stocked : false, name:"pineApple"},
         {category : "Fruits", price : "8", stocked : true, name:"grappe"},
         {category : "Vegetables", price : "5", stocked : false, name:"green"},
         {category : "Vegetables", price : "2", stocked : true, name:"potato"},
         {category : "Vegetables", price : "7", stocked : false, name:"oignon"},
    ]

   const [afficherProduitEnStock, setAfficherProduitEnStock] = useState(false)
   const [search, setSearch] = useState('')
   const [range, setRange] = useState(0)
   
   const VisibleProduct = PRODUCTS.filter( p => {
      if(afficherProduitEnStock && !p.stocked) {
         return false
      }
      if(search && !p.name.includes(search)) {
         return false
      }
      if(range && p.price > range  ) {
         return false
      }
       
      return true
   })

   return <div className="container my-5">
     
      <SearchBar  
         afficherProduitEnStock={afficherProduitEnStock}
            afficherProduitEnStockChange={setAfficherProduitEnStock} 
              search={search}
                searchChange={setSearch}
                  range={range}
                   rangeChange={setRange}
      /> 
      <ProductTable product={VisibleProduct}/> 
        
    
   </div>
  
}

function ProductTable ({product}) {
      const lignes = []
      let dernierCategory = null

      for(let p of product) {
         if(p.category !== dernierCategory) {
            lignes.push(<ProductCategoryRow name={p.category} key={p.category} />)
         }
         dernierCategory = p.category
         lignes.push(<ProductRow PRODUCT={p} key={p.name}/> )
      }

   return <table className="table w-50 mt-2 table-striped ">
         <thead>
               <tr>
                  <td className="text-primary"><strong>Nom</strong></td>
                  <td className="text-primary"><strong>Prix</strong></td>
               </tr>
         </thead>
         <tbody>
                  {lignes}
         </tbody>
   </table>
}  

function SearchBar ({afficherProduitEnStock, afficherProduitEnStockChange, search, searchChange, range, rangeChange}) {

   
   return <div>
      <div className="mb-3">
            <Input 
                  value={search}
                     onChange={searchChange}
                     placeholder="Rechercher..."
                  />
                  
            <Checkbox 
                  checked={afficherProduitEnStock} 
                     onCheck={afficherProduitEnStockChange}

            />
         
            <input 
                  type="range" 
                  value={range}
                     className="form-range w-50 mt-2" 
                        min={0}
                           max={10} 
                              onChange={(e) => rangeChange(e.target.value)} 
            />
      </div>
       
   </div>
}

export default App

