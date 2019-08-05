package bg.simo09.backend.projections;

import bg.simo09.backend.models.Author;
import bg.simo09.backend.models.Book;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.rest.core.config.Projection;

import java.util.List;
import java.util.Set;

@Projection(name = "bookDetail",types = {Book.class})
public interface BookDetail {

    String getTitle();

    String getDescription();

    float getRating();

    @Value("#{target.authors.![fullName]}")
    List<String> getAuthorsNames();

    @Value("#{target.genres.![name]}")
    List<String> getGenresNames();

}
