import { TavilySearch, } from "@langchain/tavily";

export const tavilyTool = new TavilySearch({
  maxResults: 1,
  topic: "general",
  searchDepth: "basic",
},{
  name: 'tavilyTool',
  description: "Use this tool when you need latest, current or real-time information from the internet"
});