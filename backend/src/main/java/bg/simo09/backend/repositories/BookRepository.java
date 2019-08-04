package bg.simo09.backend.repositories;

import bg.simo09.backend.models.Book;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RepositoryRestResource(collectionResourceRel = "books",path = "books")
public interface BookRepository extends JpaRepository<Book,Long> {
    List<Book> findAllByTitleContaining(@Param("title") String title);
}
