package bg.simo09.backend;

import javax.persistence.*;
import java.util.Set;

@Entity
public class Book {

    @Id
    @Column(name = "book_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String title;

    @ManyToMany
    @JoinTable(
            name = "book_authors",
            joinColumns = @JoinColumn(name = "book_id"),
            inverseJoinColumns = @JoinColumn(name = "author_id")
    )
    private Set<Author> bookAuthors;

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public Set<Author> getBookAuthors() {
        return bookAuthors;
    }

    public void setBookAuthors(Set<Author> bookAuthors) {
        this.bookAuthors = bookAuthors;
    }
}
