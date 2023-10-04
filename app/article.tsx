import React from 'react';
import Mermaid from './mermaidtext';
import {micromark} from 'micromark'
const BeautifulArticle = ({article_data}) => {
function parseText(content) {
  const splitContent = content.split('"""mermaid');
  
  const parsedContent = splitContent.map((str, index) => {
    
	if (index === 0) return <p key={index}>{str}</p>;

    const diagramAndRest = str.split('"""');
    const diagram = diagramAndRest[0];
    const rest = diagramAndRest[1];

    // Handle remaining text after diagram
    let remainingText;
    if (rest) {
      const restSplit = rest.split('"""mermaid');
      remainingText = restSplit.map((subStr, subIndex) => {
        if (subIndex === 0) return <p key={`${index}_${subIndex}`}>{subStr}</p>;

        const subDiagramAndRest = subStr.split('"""');
        const subDiagram = subDiagramAndRest[0];
        const subRest = subDiagramAndRest[1];
        return (
          <div key={`${index}_${subIndex}`}>
            <Mermaid chart={subDiagram.trim()} />
            {subRest && <p>{subRest}</p>}
          </div>
        );
      });
    }

    return (
      <div key={index}>
        <Mermaid chart={diagram.trim()} />
        {rest && remainingText}
      </div>
    );
  });

  return parsedContent;
}


  console.log("article_data",article_data)
   
   const chartDefinition = `
	`;
    return (
	<div className="article format lg:format-lg flex flex-wrap">
	  <h1>{article_data[3]}</h1>
	  <div className="w-full lg:w-1/2 p-4">
		
		<h2>Problem</h2>
		<div className="article-content text-gray-700" dangerouslySetInnerHTML={{__html: micromark(article_data[0])}}></div>
		<h2>New Concepts Introduced and Solution</h2>
		<div className="article-content text-gray-700" dangerouslySetInnerHTML={{__html: micromark(article_data[1])}}></div>
	  </div>
	  <div className="w-full lg:w-1/2 p-4">
		<h2>Flowcharts explaining the paper</h2>
		{parseText(article_data[2])}
	  </div>
	</div>

  );
};

export default BeautifulArticle;

/*
		  <p className="text-gray-700" dangerouslySetInnerHTML={{ __html: article_data[2] }} />
		  
		  
		  <Mermaid chart={chartDefinition} />
		  <FlowChartPage content={article_data[2]} />
*/