
import { RadioGroup } from "../radio-group";

describe("radio-group", () => {

  it('should set isChecked value to 1', ()=>{
   const radioGroup =  new RadioGroup();
   radioGroup.handleChange( {target: {value : 2 ,name:"SpiderMan"} })
   expect(radioGroup.selectedIndex).toBe(2)
   expect(radioGroup.selectedItem).toBe("SpiderMan")
 })
  
 

});
