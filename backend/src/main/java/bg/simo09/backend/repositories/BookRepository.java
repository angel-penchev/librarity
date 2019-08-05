package bg.simo09.backend.repositories;

import bg.simo09.backend.models.Book;
import bg.simo09.backend.projections.BookDetail;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;

@RepositoryRestResource(collectionResourceRel = "books",path = "books",excerptProjection = BookDetail.class)
public interface BookRepository extends JpaRepository<Book,Long> {
    List<Book> findAllByTitleContaining(@Param("title") String title);
}
