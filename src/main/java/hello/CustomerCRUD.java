package hello;
import org.springframework.data.repository.CrudRepository;

public interface CustomerCRUD  extends CrudRepository <Customer, Integer> {

} 