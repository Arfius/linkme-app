package hello;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMethod;

import java.util.ArrayList;
import java.util.HashMap;

@RestController
public class EndPointController {

    @Autowired 	private CustomerCRUD customerCRUD;

    
    @RequestMapping(value="/savejson",method = RequestMethod.POST,headers="Content-Type=application/json")
    public HashMap<String, Boolean>   save(@RequestBody ArrayList<Customer> customers) {

        HashMap<String, Boolean> rtn = new HashMap<String, Boolean>();
      
        try
        {
            for (Customer ut : customers) {
                    customerCRUD.save(ut);
                    rtn.put("status", true);   
            }
        }catch(Exception e) { 
            rtn.put("status", false);
        }

    return rtn;

    }

    @RequestMapping("/listcustomers")
    public ArrayList<Customer> get() {

        ArrayList<Customer> lista = new ArrayList<Customer>();
        customerCRUD.findAll().forEach(e -> lista.add(e));  
        return lista;
    }
    
}