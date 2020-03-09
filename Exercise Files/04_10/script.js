function Course(title,instructor,level,published,views) {
    this.title = title;
    this.instructor = instructor;
    this.level = level;
    this.published = published;
    this.views = views;
    this.updateViews = function() {
        return ++this.views;
    };
}

var courses = [
    new Course("Javascript Essential Training", "Morten Rand-Hendrisken", 1, true, 0),
    new Course("ECMAS 6", "Porcello", 1, true, 12310)
]

console.log(courses[1].instructor);