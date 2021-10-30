import React from "react";
import {
	Table,
	Thead,
	Tbody,
	Tfoot,
	Tr,
	Th,
	Td,
	Icon,
	Stat,
	StatLabel,
	// StatNumber,
	StatHelpText
	// StatArrow
} from "@chakra-ui/react"
import {HiMinus} from 'react-icons/hi'

export const HomeStats = () => {
    return (
			<Table size="lg">
				<Thead>
					<Tr>
						<Th>Current Stats</Th>
						<Th />
						<Th />
					</Tr>
				</Thead>
				<Tbody>
					<Tr>
						<Td>Lot Size</Td>
						<Td isNumeric>0</Td>
						<Td>
							<Stat>
								<StatLabel>Change</StatLabel>
								<StatHelpText>
									<Icon as={HiMinus} />
									0.0%
								</StatHelpText>
							</Stat>
						</Td>
					</Tr>
					<Tr>
						<Td>Storage Space</Td>
						<Td isNumeric>0</Td>
						<Td>
														<Stat>
								<StatLabel>Change</StatLabel>
								<StatHelpText>
									<Icon as={HiMinus} />
									0.0%
								</StatHelpText>
							</Stat>
						</Td>
					</Tr>
					<Tr>
						<Td>Villagers</Td>
						<Td isNumeric>0</Td>
						<Td>
														<Stat>
								<StatLabel>Change</StatLabel>
								<StatHelpText>
									<Icon as={HiMinus} />
									0.0%
								</StatHelpText>
							</Stat>
						</Td>
					</Tr>
					<Tr>
						<Td>Taxes Received</Td>
						<Td isNumeric>0</Td>
						<Td>
														<Stat>
								<StatLabel>Change</StatLabel>
								<StatHelpText>
									<Icon as={HiMinus} />
									0.0%
								</StatHelpText>
							</Stat>
						</Td>
					</Tr>
				</Tbody>
				<Tfoot>
					<Tr>
						<Th>Total Production:</Th>
						<Th isNumeric>0</Th>
					</Tr>
				</Tfoot>
			</Table>
		)
}