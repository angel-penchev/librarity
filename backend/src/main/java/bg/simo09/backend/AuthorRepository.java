package bg.simo09.backend;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

//@RepositoryRestResource(collectionResourceRel = "authors",path = "authors")
public interface AuthorRepository extends JpaRepository<Author,Long> {
}
