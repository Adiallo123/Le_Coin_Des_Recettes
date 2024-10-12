
import {Form, useLoaderData, useActionData } from "react-router-dom";


function FormRecipe(){
    
    const categories = useLoaderData();
    const message = useActionData();

    return(
    <Form className="formRecipe"  method="post" encType="multipart/form-data">
        <div>
            <label htmlFor="name" >Nom de la recette *</label>
            <input type="text" id="name" name="name" required />
        </div>
        <div>
            <label htmlFor="categorie" >categorie *</label>
            <select id="categorie" name="categorie">
                {categories.map((categorie) => (
                <option key={categorie.id} value={categorie.id}>{categorie.name}</option>
                ))}
            </select>
        </div>
        <div>
            <label htmlFor="ptime" >Durée *</label>
            <input type="time" id="ptime" name="preparation_time" required />
        </div>
        <div>
            <label htmlFor="ingredient" >Ingredients *</label>
            <textarea id="ingredient" name="ingredients" required /> 
        </div>
        <div>
            <label htmlFor="instruction" >instruction *</label>
            <textarea id="instruction" name="instruction" required /> 
        </div>
        <div>{message}</div>
        <button type="submit">Ajouter</button>
    </Form>
    )
}

export default FormRecipe;