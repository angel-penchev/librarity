package bg.simo09.backend.repositories;

import bg.simo09.backend.models.Tag;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TagRepository extends JpaRepository<Tag,Long> {
}
