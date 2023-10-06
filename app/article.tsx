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
    <>
      <div className="flex flex-wrap mt-4">
        <h1 className="text-[#FCFBFE] leading-tight ">{article_data[3]}</h1>
        <div className="w-full pt-6">
          <div className="grid grid-cols-1 md:grid-cols-2  gap-4">
            <div>
              {/* Problem part */}
              <div className="bg-[linear-gradient(_to_right,#050418,#121223,#1c1a2f,#27233b,#322b47,#342b49,#372c4c,#392c4e,#322548,#2b1e41,#24183b,#1d1135_)] shadow-[0px_8px_32px_0px_rgba(31,38,135,0.37)] backdrop-blur-sm border border-solid border-[rgba(255,255,255,0.18)] p-8 rounded-[38px] mb-4">
                <h2 className="mt-0 mb-6 text-[#FCFBFE] ">Problem</h2>
                <div
                  className="article-content text-[#AEB5CA]"
                  id="article-content1"
                  dangerouslySetInnerHTML={{
                    __html: micromark(article_data[0])
                  }}
                ></div>
              </div>
              {/* New Concepts Introduced and Solution part
               */}
              <div className="bg-[linear-gradient(_to_right,#090d25,#0c112a,#0e152f,#101735,#131a3a,#151c3c,#181f3e,#1a2140,#1c233f,#1f253f,#21273e,#24293d_)] shadow-[0px_8px_32px_0px_rgba(31,38,135,0.37)] backdrop-blur-sm border border-solid border-[rgba(255,255,255,0.18)] p-8 rounded-[38px] mb-4">
                <h2 className="mt-0 mb-6 text-[#FCFBFE] ">
                  New Concepts Introduced and Solution
                </h2>
                <div
                  className="article-content text-[#AEB5CA]"
                  id="article-content2"
                  dangerouslySetInnerHTML={{
                    __html: micromark(article_data[1])
                  }}
                ></div>
              </div>
            </div>
            {/* Flowcharts explaining the paper part */}
            <div>
              <div className="bg-[linear-gradient(_to_right,#0f1b2b,#101e2f,#112132,#112536,#122839,#112738,#112737,#102636,#0e2131,#0c1d2b,#0a1826,#071321_)] shadow-[0px_8px_32px_0px_rgba(31,38,135,0.37)] backdrop-blur-sm border border-solid border-[rgba(255,255,255,0.18)] p-8 rounded-[38px] mb-14">
                <h2 className="mt-0 mb-6 text-[#FCFBFE] ">
                  Flowcharts explaining the paper
                </h2>
                <div className="text-[#AEB5CA]" id="article-content3">
                  {parseText(article_data[2])}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BeautifulArticle;
