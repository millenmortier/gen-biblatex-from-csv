# Gen Biblatex

A tool for generating a Biblatex bibliography out of a carefully structured
CSV file.

## Invokation

```
node src/index <csvFileLocation>
```

## CSV File format

For each row:

TITLE; AUTHORS; PUBLICATION JOURNAL; JOURNAL ABBR; YEAR.

For example, the string:

```txt
Applying virtual reality to teach the software development process to novice software engineers;U Gulec, M Yilmaz, V Isler, PM Clarke;The Institute of Engineering and Technology;IET;2021
```

generates:

```txt
@article{gulec2021,
  title = {{Applying virtual reality to teach the software development process to novice software engineers}},
  authors = {U Gulec, M Yilmaz, V Isler, PM Clarke},
  journal = {The Institute of Engineering and Technology},
  year = 2021
}
```
