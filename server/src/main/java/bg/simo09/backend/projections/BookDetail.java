package bg.simo09.backend.projections;

import bg.simo09.backend.models.Book;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.rest.core.config.Projection;

import java.util.List;

@Projection(name = "bookDetail",types = {Book.class})
public interface BookDetail {

    long getID();

    String getTitle();

    @Value("#{target.authors.![fullName]}")
    List<String> getAuthors();

    @Value("#{target.tags.![name]}")
    List<String> getTags();

    String getDescription();

    float getRating();
}
