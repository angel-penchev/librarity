package bg.simo09.backend.repositories;

import bg.simo09.backend.models.Author;
import org.springframework.data.jpa.repository.JpaRepository;

//@RepositoryRestResource(collectionResourceRel = "authors",path = "authors")
public interface AuthorRepository extends JpaRepository<Author,Long> {
}
