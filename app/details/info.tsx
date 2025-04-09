import { matchInfo } from '@/response-sample/cricbuzz';
import { ScrollView, Text, View } from 'react-native';

const info = () => {
    return (
        <ScrollView className="p-2">
            <View>
                <Text className="text-xl text-center bg-gray-200 mt-5 py-1">
                    Info
                </Text>
                <View>
                    <View className="flex flex-row my-3">
                        <Text className="w-1/2 text-lg">Series</Text>
                        <Text className="w-1/2 text-lg">
                            {matchInfo.matchInfo.series.name}
                        </Text>
                    </View>
                    <View className="flex flex-row my-3">
                        <Text className="w-1/2 text-lg">Date & Time</Text>
                        <Text className="w-1/2 text-lg">Date</Text>
                    </View>
                    <View>
                        <View className="flex flex-row my-3">
                            <Text className="w-1/2 text-lg">Umpires</Text>
                            <Text className="w-1/2 text-lg">
                                {matchInfo.matchInfo.umpire1?.name},{' '}
                                {matchInfo.matchInfo.umpire2?.name},{' '}
                                {matchInfo.matchInfo.umpire3?.name}
                            </Text>
                        </View>
                        <View className="flex flex-row my-3">
                            <Text className="w-1/2 text-lg">Referee</Text>
                            <Text className="w-1/2 text-lg">
                                {matchInfo.matchInfo.referee?.name}
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
            <View>
                <Text className="text-xl text-center bg-gray-200 mt-5 py-1">
                    Venue
                </Text>
                <View>
                    <View className="flex flex-row my-3">
                        <Text className="w-1/2 text-lg">Stadium</Text>
                        <Text className="w-1/2 text-lg">
                            {matchInfo.venueInfo.ground}
                        </Text>
                    </View>
                    <View className="flex flex-row my-3">
                        <Text className="w-1/2 text-lg">City</Text>
                        <Text className="w-1/2 text-lg">
                            {matchInfo.venueInfo.city}
                        </Text>
                    </View>
                </View>
            </View>
            <View>
                <Text className="text-xl text-center bg-gray-200 mt-5 py-1">
                    Squads
                </Text>
                <View className="flex flex-row">
                    <View className="w-1/2 my-3">
                        <Text className="text-xl">
                            {matchInfo.matchInfo.team1.shortName}
                        </Text>
                        <View>
                            {matchInfo.matchInfo.team1.playerDetails.map(
                                (player, index) => (
                                    <View key={index} className='my-2'>
                                        <Text className="text-lg">
                                            {player.name}{' '}
                                            {player.captain && '(c)'}{' '}
                                            {player.keeper && '(wk)'}
                                        </Text>
                                        <Text className='font-light text-sm'>
                                            {player.role === ''
                                                ? 'No data'
                                                : player.role}
                                        </Text>
                                    </View>
                                )
                            )}
                        </View>
                    </View>
                    <View className="w-1/2 my-3">
                        <Text className="text-lg">
                            {matchInfo.matchInfo.team2.shortName}
                        </Text>
                        <View>
                            {matchInfo.matchInfo.team2.playerDetails.map(
                                (player, index) => (
                                  <View key={index} className='my-2'>
                                  <Text className="text-lg">
                                      {player.name}{' '}
                                      {player.captain && '(c)'}{' '}
                                      {player.keeper && '(wk)'}
                                  </Text>
                                  <Text className='font-light text-sm'>
                                      {player.role === ''
                                          ? 'No data'
                                          : player.role}
                                  </Text>
                              </View>
                                )
                            )}
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
};

export default info;
