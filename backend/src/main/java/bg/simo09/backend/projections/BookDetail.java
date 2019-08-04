package bg.simo09.backend.projections;

import bg.simo09.backend.models.Book;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.rest.core.config.Projection;

import java.util.List;

@Projection(name = "bookDetail",types = {Book.class})
public interface BookDetail {

    String getTitle();

    @Value("#{target.authors.![fullName]}")
    List<String> getAuthors();

}
