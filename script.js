"use strict";
(() => {
  window.portfolio = {
    init: () => {
      $(() => {
        insertProjects(projects);
      });
    }
  };

  let projects = [
    {
      name: "New York Times API Project",
      description: "For my Interaction Design class, we were asked to put together a front end for a pre-existing web service API. I chose the New York Times API and this was the front end that I developed using it.",
      image: "resources/thenewyorktimes-cover.png",
      url: "https://ebachoura.github.io/newyorktimes"
    },
    {
      name: "GRNsight",
      description: "Part of development team which researches and renders data visualizations of gene regulatory networks (GRNs) using this web application that we have developed.",
      image: "resources/grnsight-cover.png",
      url: "https://dondi.github.io/GRNsight"
    }
  ];


  let insertProjects = (projects) => {
    let toAppend = '';
    projects.forEach((project) => {
      toAppend += '<div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12"' +
      'style="text-align:center;">' +
      '<a style="display:inline-block; width: 70%;" href="' + project.url + '">' +
      '<div class="project">' +
      '<img class="project-image" src="' + project.image +'"/>' +
      '<div class="overlay">' +
      '<h1 class="text-center project-header">' + project.name + "</h1>" +
      '<p class="lead text-center project-body">' + project.description +
      '</p></div></div></a></div>';
    });
    console.log(toAppend);
    return $("#project-container").append($(toAppend));
  };
})();
