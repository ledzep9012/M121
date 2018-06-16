var pipelineLab = [
  {
    $project: {
      size: {$size : {$split : ['$title', " "]}},
    }
  },
  {
    $match: {
      size : {$eq : 1}
    }
  }
]