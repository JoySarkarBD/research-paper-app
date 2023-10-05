import { micromark } from 'micromark';
import Mermaid from './mermaidtext';

const BeautifulArticle = ({ article_data }) => {
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
          if (subIndex === 0)
            return <p key={`${index}_${subIndex}`}>{subStr}</p>;

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

  console.log('article_data', article_data);

  const chartDefinition = `
	`;
  return (
    <div className=" flex flex-wrap mt-4">
      <h1 className="text-[#FCFBFE] leading-tight ">{article_data[3]}</h1>
      <div className="w-full pt-6">
        <div className="problem_box p-8 rounded-[38px] my-12 ">
          <h2 className="mt-0 mb-6 text-[#FCFBFE] ">Problem</h2>
          <div
            className="article-content text-[#AEB5CA]"
            id="article-content1"
            dangerouslySetInnerHTML={{ __html: micromark(article_data[0]) }}
          ></div>
        </div>
        <div className="solution_box p-8 rounded-[38px] my-14 ">
          <h2 className="mt-0 mb-6 text-[#FCFBFE] ">
            New Concepts Introduced and Solution
          </h2>
          <div
            className="article-content text-[#AEB5CA]"
            id="article-content2"
            dangerouslySetInnerHTML={{ __html: micromark(article_data[1]) }}
          ></div>
        </div>
      </div>
      <div className="w-full  pt-6">
        <div className="chart_box p-8 rounded-[38px] mb-14 ">
          <h2 className="mt-0 mb-6 text-[#FCFBFE] ">
            Flowcharts explaining the paper
          </h2>
          <div className="text-[#AEB5CA]" id="article-content3">
            {parseText(article_data[2])}
          </div>
        </div>
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
