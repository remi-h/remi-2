"use client";
import React, { useState } from "react";
import { Heading, Box, Text, Flex, Table } from "@radix-ui/themes";
import LastUpdatedBadge from "@/components/LastUpdatedBadge";

export default function Log() {
  const [sortOrder, setSortOrder] = useState("descending");

  const handleSortButtonClick = () => {
    setSortOrder(sortOrder === "ascending" ? "descending" : "ascending");
  };
  const arrow = sortOrder === "ascending" ? "↓" : "↑";

  const logslist = [
    {
      id: 1,
      date: "26/04/2018",
      media: "高校生新聞 Koukousei Shimbun",
      title: "スラムにせっけん届けたい 東工大付属高校の３人がプロジェクト",
      link: "https://www.koukouseishinbun.jp/articles/-/3833",
    },
    {
      id: 2,
      date: "20/06/2019",
      media: "niconico news",
      title:
        "夏休みはプログラミングを学ぼう!中高生のためのプログラミングキャンプ『Gs ACADEMY YOUTH CAMP』東京・表参道で開講",
      link: "https://news.nicovideo.jp/watch/nw5518244",
    },
    {
      id: 3,
      date: "20/10/2018",
      media: "Rikejo リケジョ 講談社",
      title:
        "【連続公開】4ヵ月でアプリを作成した女子高生チーム登場!「女子にプログラミングを広めるために 」イベントレポート（前編）",
      link: "https://www.rikejo.jp/article/23617",
    },
    {
      id: 4,
      date: "21/10/2018",
      media: "Rikujyo リケジョ 講談社",
      title:
        "【連続公開】4ヵ月でアプリを作成した女子高生チーム登場!「女子にプログラミングを広めるために 」イベントレポート（後編）",
      link: "https://www.rikejo.jp/article/23633",
    },
    {
      id: 5,
      date: "20/08/2019",
      media: "Impress Watch 子供とIT",
      title:
        "テクノロジーで女性が活躍する社会を目指し、世界に挑む日本のテック系女子中高生たち",
      link: "https://www.watch.impress.co.jp/kodomo_it/news/1201834.html",
    },
    {
      id: 6,
      date: "26/12/2017",
      media: "校外プログラム大全",
      title:
        "【体験談寄稿】ニューヨーク科学アカデミー主催の高校生対象の教育プログラム『The Junior Academy』とは?!",
      link: "https://kininarukotomatome.com/tja-remi/",
    },
    {
      id: 7,
      date: "06/11/2017",
      media: "Global Edu",
      title:
        "中高生レポート⑨ | The New York Academy of Sciences主催STEMプログラム「The Junior Academy」",
      link: "https://globaledu.jp/nyas-tja/",
    },
    {
      id: 8,
      date: "19/09/2018",
      media: "Global Edu",
      title: "中高生レポート㉑ | Technovation Challenge 2018",
      link: "https://globaledu.jp/technovationchallenge2018/",
    },
    {
      id: 9,
      date: "22/01/2024",
      media: "Spotify Podcast - Bias / バイアス",
      title:
        "スウェーデン留学から現地就職!?/H&M本社で働いて分かった”北欧流の働き方”【Remi前編】",
      link: "https://open.spotify.com/episode/1xbQhe5qok8Wmnm7LjL7e4",
    },
    {
      id: 10,
      date: "29/01/2024",
      media: "Spotify Podcast - Bias / バイアス",
      title:
        "多国籍と女性のボスは当たり前/大学院まで無料!スウェーデンの新卒キャリア事情【Remi後編】】",
      link: "https://open.spotify.com/episode/1xbQhe5qok8Wmnm7LjL7e4",
    },
    {
      id: 11,
      date: "15/02/2024",
      media: "Portfolio",
      title: "Updated Portfolio site + photo page, and log page",
      link: "https://www.remihiguchi.com/",
    },
    {
      id: 12,
      media: "Deruqui Community",
      date: "10/01/2020",
      title: "Deruqui Interview 「樋口れみー平等な世の中に近づけたい」",
      link: "https://community.deruqui.com/students/remi_higuchi",
    },
    {
      id: 13,
      date: "08/11/2021",
      media: "スウェーデン大使館",
      title: "スウェーデン大使館×王立工科大学 オンライン留学説明会",
      link: "https://www.swedenabroad.se/ja/embassies/japan-tokyo/current/calendar/スウェーデン留学説明会",
    },
    {
      id: 14,
      date: "12/05/2024",
      media: "白川寧々チャンネル - YouTube",
      title:
        "【海外就職】スウェーデンH&Mテック新卒プログラムって何?どんな準備が必要?",
      link: "https://www.youtube.com/watch?v=_blKDb9do2g",
    },
    {
      id: 15,
      date: "15/01/2025",
      media: "海外ではたらく私たち20's - note",
      title:
        "#03 【北欧×新卒】スウェーデン留学から現地就職!?H&M本社で働いて分かった“北欧流の働き方”",
      link: "https://note.com/bias20s/n/na88f96dcce0e",
    },
    {
      id: 16,
      date: "19/01/2025",
      media: "海外ではたらく私たち20's - note",
      title:
        "#04 【多国籍企業】日本人の海外就職は今が狙い目!? 穴場のH&M本社グローバル人材採用とは?",
      link: "https://note.com/bias20s/n/na67cc6027aa8",
    },
  ];
  return (
    <Box>
      <Box py="3">
        <Flex align="baseline" gap="2">
          <Heading as="h1" size="7">
            Log
          </Heading>
          <LastUpdatedBadge />
        </Flex>
        <Text>Things I have done and am proud of :)</Text>
      </Box>

      <Table.Root>
        <Table.Header>
          <Table.Row>
            <Table.Cell>
              Date <button onClick={handleSortButtonClick}>{arrow}</button>
            </Table.Cell>
            <Table.Cell>Title</Table.Cell>
            <Table.Cell>Media</Table.Cell>
            <Table.Cell>Link</Table.Cell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {logslist
            .sort((a, b) => {
              const dateA = new Date(
                a.date.split("/").reverse().join("-")
              ).getTime();
              const dateB = new Date(
                b.date.split("/").reverse().join("-")
              ).getTime();
              return sortOrder === "ascending" ? dateA - dateB : dateB - dateA;
            })
            .map((log) => (
              <Table.Row key={log.id}>
                <Table.Cell>{log.date}</Table.Cell>
                <Table.Cell>{log.title}</Table.Cell>
                <Table.Cell>{log.media}</Table.Cell>
                <Table.Cell>
                  <a
                    href={log.link}
                    target="_blank"
                    className="break-all text-blue-900 underline hover:bg-mint"
                  >
                    {log.link}
                  </a>
                </Table.Cell>
              </Table.Row>
            ))}
        </Table.Body>
      </Table.Root>
    </Box>
  );
}
