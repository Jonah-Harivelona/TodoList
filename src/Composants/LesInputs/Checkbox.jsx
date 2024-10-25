export function Checkbox ({checked, onCheck}) {
    return <div className="form-check">

            <label htmlFor="case" className="form-check-label">
                <input 
                    id="case"
                    className="form-check-input me-2"
                    type="checkbox"
                    checked={checked}
                    onChange={(e) => onCheck(e.target.checked)} 
                /> 
            N' afficher que les produits en stocks
            </label>
        
    </div>
}