-- CreateTable
CREATE TABLE "station" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT NOT NULL,

    CONSTRAINT "station_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Schedule" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT NOT NULL,
    "startStationId" TEXT NOT NULL,
    "endStationId" TEXT NOT NULL,
    "dispatch" TIMESTAMP(3) NOT NULL,
    "arrival" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Schedule_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Schedule" ADD CONSTRAINT "Schedule_startStationId_fkey" FOREIGN KEY ("startStationId") REFERENCES "station"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Schedule" ADD CONSTRAINT "Schedule_endStationId_fkey" FOREIGN KEY ("endStationId") REFERENCES "station"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
