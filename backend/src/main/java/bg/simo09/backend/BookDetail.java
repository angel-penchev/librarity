package bg.simo09.backend;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.rest.core.config.Projection;

import java.util.Set;

@Projection(name = "bookDetail",types = {Book.class})
public interface BookDetail {

    String getTitle();

    @Value("#{target.bookAuthors}")
    Set<Author> getAuthors();

}
