type Movie = {
  id: string;
  title: {
    "@type": string;
    id: string;
    image: {
      height: number;
      id: string;
      url: string;
      width: number;
    };
    runningTimeInMinutes: number;
    title: string;
    titleType: string;
    year: number;
  };
  certificates: {
    US: [
      {
        certificate: string;
        certificateNumber: number;
        country: string;
      }
    ];
  };
  ratings: {
    canRate: boolean;
    rating: number;
    ratingCount: number;
    topRank: number;
  };
  genres: string[];
  releaseDate: string;
  plotOutline: {
    author: string;
    id: string;
    text: string;
  };
  plotSummary: {
    author: string;
    id: string;
    text: string;
  };
};
