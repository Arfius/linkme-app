package hello;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.util.Calendar;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor

public class Customer {
    
    @Id @GeneratedValue (strategy = GenerationType.SEQUENCE) Long id;
    String name = "";
    String surname = "";
    Calendar birthday = Calendar.getInstance();
    String city = "";
    String zipcode = "";
}