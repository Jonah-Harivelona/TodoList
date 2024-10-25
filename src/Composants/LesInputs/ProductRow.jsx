
    export function ProductRow ({PRODUCT}) {

    const  style = PRODUCT.stocked ? undefined : {color : 'red'}

    return   <tr>
                    <td style={style}>{PRODUCT.name}</td> 
                    <td>{PRODUCT.price}</td>
    </tr>
      
}