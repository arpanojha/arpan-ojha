
import demo from "./mbo.png"
import React,{Fragment} from "react";
import '../project1.css'
function Mbo() {
  
	return (
		<Fragment>
    <div className="container" >
    <h1>Market Basket Optimizer</h1>
    <h4>Concepts Used</h4>
   <p>Association rule learning in apriori and eclat. Data wrangling with python and excel. </p>
      <h4>Dataset</h4>
      <p> Data set is obtained from <a href="https://www.kaggle.com/irfanasrullah/groceries?select=groceries+-+groceries.csv">Kaggle</a>. <br/> The dataset contains 9835 transactions by customers shopping for groceries. The data contains 169 unique items.</p>
      <h4>Cleaning and Processing</h4>
      <p>The csv file was read transaction by transaction and each transaction was saved as a list.A mapping was created from the unique items in the dataset to integers so that each item corresponded to a unique integer.
      The entire data was mapped to integers to reduce the storage and computational requirement. 
      A reverse mapping was created from the integers to the item, so that the item names could be written in the final output file. 
      </p>
      <h4>Modifying</h4>
      <p>The dataframe imported into python using pandas. A workable dataframe was generated by pairing every item in the corresponding transcation. 
      For example: [apple, banana,yogurt] transation becomes [[apple,banana],[apple,yogurt],[yogurt,banana]] </p>
      <h4>Training</h4>
      <p>Training was done using apriori and eclat. apyori python library was used to generate rules. All results displayed in a dataframe in descending order of Lift. <br/>
      Simple Definitions: <br/>
      Lift: <br/>
      Support: <br/>
      Confidence: <br/> </p>
      <h4>Testing and inference</h4>

      <p>Inferences: <br/>
      <ul>
  <li>Flour and sugar are most commly bought together items followed by cheese and ham, cheese and bread, and sugar and baking powder. </li>
  <li>Following Kroger's business plan, we shoul be placing frequently bought together items far apart. </li>
  <li>Most commonly bought items can be stocked in advance based with similar counts following the demand. Less bought items can be replaced with others. </li>
</ul>
      <br/>Results were tabulated in a dataframe and displayed as follows:<br/>
      <img src={demo}/>
       </p>
      }
    </div>
    </Fragment>
  );
}

export default Mbo;