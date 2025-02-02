import { Heading, Box, Text, Flex, Tabs, Button } from "@radix-ui/themes";
import Link from "next/link";

export default function Hotel() {
  return (
    <Box py="3">
      <Flex align="baseline" gap="2">
        <Heading as="h1" size="7">
          Hotel & Dining, Remi
        </Heading>
      </Flex>
      <Text>Welcome!</Text>
      <Tabs.Root defaultValue="overview">
        <Tabs.List>
          <Tabs.Trigger value="overview">Overview</Tabs.Trigger>
          <Tabs.Trigger value="hotel">Hotel</Tabs.Trigger>
          <Tabs.Trigger value="dining">Dining</Tabs.Trigger>
        </Tabs.List>

        <Box p="3">
          <Tabs.Content value="overview">
            <Flex direction="column" gap="3">
              <Box>
                <Text size="4" as="p">
                  ⭐️ アクセス
                </Text>
                <Text size="3" as="p">
                  【空港から】
                  <br />
                  方法1. Arlanda Express (25歳以下は安い)でStockholm Central
                  Station(= T-centralen)まで20分 <br />
                  T-Centralenから地下鉄10分・Redline の Bergshamra 駅 →
                  Björnstigen 出口から徒歩10秒 <br />

                  方法.2 空港からタクシー、おすすめはBolt、Uberより若干安い。 <br />
                  目的地を「Bergshamra Dental」に設定してください。 
                  
                </Text>
              </Box>
              <Box>
                <Text size="4" as="p">
                  ⭐️ 鍵
                </Text>
                <Text size="3" as="p">
                  最初着いたときに鍵を渡します。1つしかないです。 <br />
                </Text>
              </Box>
              <Box>
                <Text size="4" as="p">
                  ⭐️ エンターテイメント
                </Text>
                <Text size="3" as="p">
                  すずめ雀・カードゲーム・プロジェクター・3Dプリンター
                </Text>
              </Box>
              <Box>
                <Text size="4" as="p">
                  ⭐️ リモートワーク（推奨しない）
                </Text>
                <Text size="3" as="p">
                  モニター・Wifi・電源・デスク・椅子<br />
                  WIFI: Coldspot, passはログインパスワードと同じ
                </Text>
              </Box>
            </Flex>
          </Tabs.Content>

          <Tabs.Content value="hotel">
            <Flex direction="column" gap="3">
              <Box>
                <Text size="4" as="p">
                  ⭐️ 家にあるもの
                </Text>
                <Text size="3" as="p">
                  タオル類・石鹸類・歯ブラシ・洗濯機・乾燥機・各種充電器
                  <br />
                  たいていのものはあるはず
                </Text>
              </Box>
              <Box>
                <Text size="4" as="p">
                  ⭐️ 家にないもの
                </Text>
                <Text size="3" as="p">
                  ヘアアイロン・
                </Text>
              </Box>
              <Box>
                <Text size="4" as="p">
                  ⭐️ 持ってきて欲しいもの
                </Text>
                <Text size="3" as="p">
                  ビーサン(サウナ用)・楽しい気持ち❣️
                </Text>
              </Box>
            </Flex>
          </Tabs.Content>

          <Tabs.Content value="dining">
            <Flex direction="column" gap="3">
              <Box>
                <Text size="4" as="p">
                  ⭐️ 食べにいくべきもの
                </Text>
                <Text size="3" as="p">
                  ミートボール・FIKA・Fish & Chips・ステーキ・サンドイッチ
                </Text>
                <Link href="restaurants">
                  <Button radius="none" variant="outline">
                    Restaurants Recommendations
                  </Button>
                </Link>
              </Box>
              <Box>
                <Text size="4" as="p">
                  ⭐️ Dining & Drinks Menu
                </Text>
                <Text size="3" as="p">
                  サーモンスープ・リゾット・パスタ・抹茶ラテ・チャイラテ・カクテル少し
                </Text>
              </Box>
              <Box>
                <Text size="4" as="p">
                  ⭐️ セルフサービス
                </Text>
                <Text size="3" as="p">
                  水・ジュース・コーヒー・紅茶・コンフレーク・お菓子
                </Text>
              </Box>
              <Box>
                <Text size="4" as="p">
                  ⭐️ Remiが作れないもの
                </Text>
                <Text size="3" as="p">
                  サラダ・難しいもの <br />
                  調理器具はあるので皆んなで作れる
                </Text>
              </Box>
            </Flex>
          </Tabs.Content>
        </Box>
      </Tabs.Root>
    </Box>
  );
}
